import { FormGroup } from '@angular/forms';



//functional way 

export function PasswordChecker(controlName:string,CompareControlName:string )
{
    //here the input parameters can also be password:string and confirmPassword;string
    //only this they need to be string type


    return (formGroup:FormGroup)=>
    {
        //grabing the values from parameters
        
        const password=formGroup.controls[controlName];
        const ConfPassword=formGroup.controls[CompareControlName];
        if(password.value!==ConfPassword)
        {
            ConfPassword.setErrors({mustMatch:true});
            //here setErrors method returns a key value pair so we are returning it 
            //as both should match 
        }
        else{
            ConfPassword.setErrors(null);
            //since passwords match directly setting null-> No errors in the password
            //match 

        }
    }
}