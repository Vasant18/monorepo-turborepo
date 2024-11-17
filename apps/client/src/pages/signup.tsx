import { Signup } from '@repo/ui';

export default function SignupPage() {
    return (
        <Signup
            onClick={async (username: string, password: string) => {
                // Handle signup logic here
                // Example:
                // const response = await axios.post("/api/signup", {
                //   username,
                //   password, 
                // });
            }}
        />
    );
}