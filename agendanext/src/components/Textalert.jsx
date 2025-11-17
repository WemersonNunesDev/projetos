export default function Textalert({ text, status, color }) {
    const colorClass = {
        rose: 'bg-rose-200 text-rose-700',
        green: 'bg-emerald-200 text-emerald-700',
        yellow: 'bg-yellow-200 text-yellow-700',
        blue: 'bg-blue-200 text-blue-700',
    }

    const choseColor = colorClass[color] || colorClass.blue

    return(
        <div className={` px-4 py-2 rounded text-left text-sm ${choseColor} ${status}`}>
            <p>{text}</p>
        </div>
    )
}