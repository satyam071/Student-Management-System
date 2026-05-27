import Button from "./Button";
import "../../index.css"

const Xyz = {
    title: "My Awesome Button",
    component: Button,
};

export const Template = (args: any) => (
    <Button {...args} >
        
    </Button>
);

export const main:any =Template.bind({});
main.args={
    children:"Sign in",
    type:"submit"
};


export default Xyz;