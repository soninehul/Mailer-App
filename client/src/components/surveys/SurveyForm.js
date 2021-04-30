import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

class SurveyForm extends Component {
    renderFields() {
        return(
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField}/>
                <Field label="Subject Line" type="text" name="subject" component={SurveyField}/>
                <Field label="Email Body" type="text" name="body" component={SurveyField}/>
                <Field label="Recipients List" type="text" name="recipients" component={SurveyField}/>
            </div>
        );
    }

    render() {
        return(
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text" style={{padding: '0 30px' }}>
                        Next
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    if(!values.title) {
        errors.title = 'You must provide a title.';
    }
    if(!values.subject) {
        errors.subject = 'You must provide a subject.';
    }
    if(!values.body) {
        errors.body = 'You must provide a body.';
    }
    if(!values.recipients) {
        errors.recipients = 'You must provide atleast one email.';
    }

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);