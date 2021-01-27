import React from 'react'

import {withApartmentsService} from '../hoc'
import Input from '../input'
import Button from '../button'
import {createControls, validate, validateForm} from '../form/formFrameworks'
import ApartmentsService from '../../services/apartments-service'

import './modal.less'


class Modal extends React.Component {
    inputName = React.createRef(null)
    inputPhone = React.createRef(null)
    state = {
        isFormValid: false,
        formControls:{
            name: createControls({
                type: 'text',
                label: 'Имя',
                className: 'modal__form-input',
                ref: this.inputName,
                placeholder: 'Введите имя',
                errorMassage: 'Error message',
            }, {required: true}),
            phone: createControls({
                type: 'text',
                label: 'Телефон',
                className: 'modal__form-input',
                ref: this.inputPhone,
                placeholder: '+7 (XXX) XXX-XX-XX',
                errorMassage: 'Error message',
            }, {required: true, phone: true}),
            policy: createControls({
                type: 'checkbox',
                checked: true,
                label: 'Я согласен на обработку моих персональных данных. С Политикой в отношении обработки персональных данных ознакомлен и согласен.Телефон',

            })
        }
    }

    onChangeHandler(e, controlName){
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = e.target.value
        control.touched = true
        control.valid = validate(control.value, control.validation)

        formControls[controlName] = control

        this.setState({
            formControls,
            isFormValid: validateForm(formControls)
        })
    }

    submitForm = (e) => {
        const {onOpenedModal, apartmentsService} = this.props

        e.preventDefault()
        apartmentsService
            .submitForm({name: name.value, phone: phone.value})

        const formControls = {...this.state.formControls}
        formControls.name.value = ''
        formControls.phone.value = ''

        this.setState({
            formControls,
        })

        this.inputName.current.value = ""
        this.inputPhone.current.value = ""

        onOpenedModal()
    }

    renderInput(){
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName]
            const className = control.type == 'checkbox' ? 'formgroup formgroup--checkbox' : 'formgroup'
            return (
                <div className={className} key={controlName + index}>
                    <Input 
                        key={controlName + index}
                        type={control.type}
                        value={control.value}
                        className={control.className}
                        placeholder={control.placeholder}
                        label={control.label}
                        checked={control.checked}
                        dir={control.type == 'checkbox' ? 'end' : 'start'}
                        errorMassage={control.errorMassage}
                        touched={control.touched}
                        valid={control.valid}
                        shouldValidate={!!control.validation}
                        ref={control.ref}
                        onChange={(e) => this.onChangeHandler(e, controlName)}
                    />
                </div>
            )
        })
    }

    render(){
        const {onOpenedModal, item: {scu,  building, flat_number}} = this.props
        return (
            <div className="modal-wrapper">
            <div className="modal">
                <div className="modal__header">
                    <div className="modal__title">
                        Заявка на бронирование
                    </div>
                    <div className="modal__details">
                        Квартира <span>{flat_number}</span> в Первом квартале Дом {building}
                        <div className="modal__details-art">{scu}</div>
                    </div>
                </div>
    
                <form className="modal__form">
                    <div className="modal__form-content">

                        {this.renderInput()}
    
                    </div>
                    <Button
                        className={"modal__submit"}
                        type={"submit"}
                        disabled={!this.state.isFormValid}
                        onClick={(e) => this.submitForm(e)}
                    >
                        {"Отправить заявку"}
                    </Button>
                </form>
                <button className="modal__close" onClick={() => onOpenedModal()}>
                    Закрыть
                </button>
            </div>
        </div>
        )
    }
}

export default withApartmentsService(Modal)

