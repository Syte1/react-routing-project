import className from 'classnames'

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    outline,
    ...rest

}) {
    const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-600 bg-blue-600 text-white': primary && !outline,
        'border-gray-900 bg-gray-900 text-white': secondary && !outline,
        'border-green-600 bg-green-600 text-white': success && !outline,
        'border-yellow-500 bg-yellow-500 text-white': warning && !outline,
        'border-red-600 bg-red-600 text-white': danger && !outline,
        'rounded-full': rounded,
        'bg-white': outline,
        'border-blue-600 text-blue-600': outline && primary,
        'border-gray-900 text-gray-900': outline && secondary,
        'border-green-600 text-green-600': success && outline,
        'border-yellow-500 text-yellow-500': outline && warning,
        'border-red-600 text-red-600': outline && danger
    })
    console.log(classes)
    return (
        
        <button {...rest} className={classes}>
            {children}
        </button>
        )
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
        const count =
              Number(!!primary)
            + Number(!!secondary)
            + Number(!!warning)
            + Number(!!success)
            + Number(!!danger)
        if (count > 1) {
            return new Error("Only one of primary, secondary, warning, success, or danger can be true.")
        }
    },
}

export default Button