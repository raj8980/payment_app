export function Input(props){
    return (
            <div>
                <label htmlFor={props.label} className="block text-sm font-medium leading-6 text-gray-900 ">{props.label}</label>
                <div className="mt-2">
                    <input onChange={props.onChange} placeholder={props.placeholder} className="block w-full rounded-full border-0 py-1.5 text-gray-900 
                    shadow-2xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600
                    sm:text-sm sm:leading-6 px-4"></input>
                </div>
            </div>
    );
}