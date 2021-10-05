import React from "react";
import ContactForm, { FormRes } from 'contact-form-hexipi';


class Contact extends React.Component {
    state = {
        formSubmitResult: FormRes.NONE,
    };

    onSubmit = formData => {
        //Use to call your backend/API functions (or anything else you need)
        //to send your form data.

        alert(`Form Data: ${JSON.stringify(formData)}`);
        this.setState({
            formSubmitResult: FormRes.OK,
        })
    };

    //Set the state of the "formSubmitResult" to the default so that
    //the form could be displayed again
    formSubmitResultReset = () => this.setState({ formSubmitResult: FormRes.NONE });

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <ContactForm
                        submitMethod="post"
                        email="diarise@gmail.com"

                        //(EITHER OR, BUT NOT BOTH!)
                        //tel="+18005555555"
                        //OR
                        telWithCountryCode={["4242790150", "US"]}

                        socialMediaLinks={[
                            //Facebook link
                            "https://www.facebook.com/HexiPi.Web.Dev",

                            //Instagram Link
                            "https://instagram.com/hexipi",

                            //YouTube link
                            "https://www.youtube.com/channel/UCxJUbbqJ_3hpaL53vn2EFVA",

                            //Website Link
                            "https://hexipi.com/"

                            //...Or anything you can think of!
                        ]}
                        onSubmitCallback={this.onSubmit}
                        formSubmitResult={this.state.formSubmitResult}
                        formSubmitResultReset={this.formSubmitResultReset}
                        backgroundColor="#270941ec"
                        autoFormatPhoneNumber={
                            { shouldFormat: true, countryCode: 'US' }
                        }
                    />
                </header>
            </div>
        );
    }
}

export default Contact;