const compose = (...func) => (mainCopmonent) =>{
    return func.reduceRight((prevF, f) => {
        return f(prevF)
    }, mainCopmonent)
} 

export default compose