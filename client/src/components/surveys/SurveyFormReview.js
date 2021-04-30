import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
    return(
        <div>
            <h5>Please Review your Entries</h5>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Email Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Recipients List</label>
                    <div>{formValues.recipients}</div>
                </div>
            </div>
            <button className="yellow darken-3 btn-flat white-text" style={{marginTop: '20px'}}
            onClick={onCancel}>
                Back
            </button>
            <button onClick = {() => submitSurvey(formValues, history)}
            className="green right btn-flat white-text" style={{marginTop: '20px'}}>
                Send Survey
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return { formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));