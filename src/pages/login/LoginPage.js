
import CardComponent from "../../components/card/CardComponent";
import LoginForm from "../../components/form/login/LoginForm";
import "./LoginPage.css"

const LoginPage = () => {
    return <CardComponent
            title='Login Form'
            variant='outline'
            component={<LoginForm/>}
        >
        </CardComponent>
  };
  
export default LoginPage;