export function Button(props){
    return (
        <div>
            <button onClick={props.onClick} className="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white
            shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                {props.label}
            </button>
        </div>
    );
}