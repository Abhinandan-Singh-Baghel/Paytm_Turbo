import { Button } from "./button"


interface AppbarProps {
    user?: {
        name?: string | null;
    },
    
    onSignin: any,
    onSignout: any
}



export const Appbar = ({
    user,
    onSignin,
    onSignout
}: AppbarProps) => {
    
    return <div>
        <div>
            PayTM
        </div>
        <div>
            <Button onClick={user ? onSignout: onSignin}>{user ? "Logout": "Login"}</Button>
        </div>
    </div>

}