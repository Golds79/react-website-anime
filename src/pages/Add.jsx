import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/Add.css';

function Add() {
  const [submittedForm, setsubmittedForm] = useState(false);

  function sendEmail(object) {
    emailjs.send(
      'service_0zxtsvg',
      'template_fdmpp0r',
      object,
      'N_ekfh3qw9h-dQ-TP',
    );
  }

  return (
    <>
      <Navbar />
      <header>
        <div className="img-bg recommended">
          <h1 className="title-text">Add your favorite movie</h1>
        </div>
      </header>
      <div className="single-container">
        <div className="box-description">
          <h5 className="single-text">
            Add your favorite movie or series to Anime selection
          </h5>
          <div className="line-description"></div>
          <div className="single-container">
            <p className="single-text-description">
              If you consider that your movie or series should be present in
              Anime Selection, you just have to write in the following form.
              Tell us why you think your favorite movie or series should be on
              the select list of the best and most influential anime of all
              time.
            </p>
          </div>
        </div>
      </div>
      <div className="add-content">
        <Formik
          initialValues={{
            name: '',
            email: '',
            title: '',
            message: '',
          }}
          validate={(values) => {
            let errors = {};

            // Name validation
            if (!values.name) {
              errors.name = 'Please enter a name';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
              errors.name = 'Your name can only contain letters and spaces.';
            }

            //Email validation

            if (!values.email) {
              errors.email = 'Please enter an email';
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email,
              )
            ) {
              errors.email =
                'Your email address can contain only letters, numbers, periods (.), hyphens (-), and underscores (_).';
            }

            // Title validation
            if (!values.title) {
              errors.title = 'Please enter a title';
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.title)) {
              errors.title = 'Your name can only contain letters and spaces.';
            }

            //Message validation

            if (!values.message) {
              errors.message = 'Please enter your message';
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setsubmittedForm(true);
            sendEmail(values);
            setTimeout(() => setsubmittedForm(false), 5000);
          }}
        >
          {({ errors }) => (
            <Form className="add-form">
              <div>
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                />
                <ErrorMessage
                  name="name"
                  component={() => <div className="error">{errors.name}</div>}
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@email.com"
                />
                <ErrorMessage
                  name="email"
                  component={() => <div className="error">{errors.email}</div>}
                />
              </div>
              <div>
                <label htmlFor="title">Title</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title of the movie or series"
                />
                <ErrorMessage
                  name="title"
                  component={() => <div className="error">{errors.title}</div>}
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <Field name="message" as="textarea" placeholder="Message" />
                <ErrorMessage
                  name="message"
                  component={() => (
                    <div className="error">{errors.message}</div>
                  )}
                />
              </div>
              <button type="submit">Send</button>
              {submittedForm && (
                <p className="success">Form sent successfully!</p>
              )}
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </>
  );
}

export default Add;
