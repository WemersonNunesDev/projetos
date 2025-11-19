export default function Msgbox({ text, styleMsg }) {
    const box = {
        alert: 'bg-rose-300 text-rose-900',
        primary: 'bg-blue-300 text-blue-900',
        succefull: 'bg-green-300 text-green-900',
    }
    const style = box[styleMsg] || box.primary;
    return(
        <div className={`px-2 py-1 mt-4 rounded ${style}`}>
            <p className="text-sm font-semibold">{text}</p>
        </div>
    )
}