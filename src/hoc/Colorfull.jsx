/**
 * Note Higher Order Component
 */

const Colorfull = WrappedComponent => {
    const colors = [
        "success",
        "warning",
        "danger",
        "info",
        "primary",
        "dark",
        "light"
    ];

    let randomColor = colors[Math.floor(Math.random() * (colors.length - 1))];
    let className = `bg-${randomColor}`;

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }

}


export default Colorfull;