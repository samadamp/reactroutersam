import { Link } from "react-router-dom"

export default function NotFoundPage() {
    return (

    <div className="text-3xl flex flex-col gap-2">
        404 Not Found
        <Link to ="/">Home from Link</Link>
        
        
    </div>
    )
}