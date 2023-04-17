

interface User
{
    name: string
    email?: string
    age?: number
}

interface Props
{
    user: User
}

const User = ({ user }: Props) => {
    
    return (
        <div>
            <h1>{user.name}</h1>
            
        </div>
        
    )
}
export default User;
