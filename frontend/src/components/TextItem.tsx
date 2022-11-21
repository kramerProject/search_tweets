export function TextItem({text, val, ...rest}) {
    return (
        <h1 {...rest} className='ml-2'>
            <span className="font-bold text-blue-700">{text}: </span>
            <span className="font-bold text-orange-400">{val}</span>
        </h1>
    )
}