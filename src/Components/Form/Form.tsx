import Title from "../Title/Title"
import 'firebase/firestore';
import { useState } from "react";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import app from "../../services/firebase";

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Forms = () => {
    const [pronoun, setPronoun] = useState("he/him");
    const [role, setRole] = useState("Architect");
    const [experience, setExperience] = useState('false');
    const [confirm, setConfirm] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [enrolled, setEnrolled] = useState('');
    const [organization, setOrganization] = useState('');
    const [about, setAbout] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [blog, setBlog] = useState('');
    const [workshop, setWorkshop] = useState('false');
    const [conference, setConference] = useState('false');
    const [diet, setDiet] = useState('None');
    const [tsize, setTsize] = useState('S');
    const [understand, setUnderstand] = useState('');

    // Registration Event
    function RegistrationEvent(e) {
        e.preventDefault();
        const db = getFirestore(app);
        const dbref = collection(db, "register")
        const data = {
            pronoun: pronoun,
            role: role,
            experience: experience,
            confirm: confirm,
            email: email,
            contact: contactNumber,
            enrolled: enrolled,
            organization: organization,
            about: about,
            LinkedIn: linkedin,
            GitHub: github,
            Blog: blog,
            workshop: workshop,
            conference: conference,
            diet: diet,
            tsize: tsize,
            understand: understand
        }
        // const db = app.firestore();
        addDoc(dbref, data)

            .then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
                console.log("done");
                window.location.reload();
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
        console.log("hola")
    }

    return (
        <>
            <Title heading="Application Form" />
            <form onSubmit={RegistrationEvent}>
                <section className="bg-white dark:bg-gray-900">
                    <div className="pb-8 lg:pb-16 px-4 mx-auto max-w-screen-md">
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Complete your participant application here and wait for us to get back to you on your application status!</p>
                        <form action="#" className="space-y-8">
                            <div>
                                <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full name</label>
                                <input type="text" id="full_name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="John Doe" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                                <input type="tel" id="phone" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="9000000000" required />
                            </div>
                            <div>
                                <label htmlFor="pronoun" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Preferred pronoun</label>
                                <select id="pronoun" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="he/him">he/him</option>
                                    <option value="she/her">she/her</option>
                                    <option value="they/them">they/them</option>
                                    <option value="Decline to specify">Decline to specify</option>
                                </select>
                            </div>
                            <div className="flex items-center mb-4">
                                <input id="is_student" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="is_student" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Are you currently enrolled in a full-time undergraduate academic course?</label>
                            </div>
                            <div>
                                <label htmlFor="organization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Organization/College</label>
                                <input type="text" id="organization" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Dunder Mifflin Paper Company, Inc." required />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Role</label>
                                <select id="role" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="Architect">Architect</option>
                                    <option value="Data Analyst">Data Analyst</option>
                                    <option value="Data Engineer">Data Engineer</option>
                                    <option value="Data Scientist">Data Scientist</option>
                                    <option value="Database Admin">Database Admin</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Developer">Developer</option>
                                    <option value="DevOps Engineer">DevOps Engineer</option>
                                    <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                                    <option value="Network Engineer">Network Engineer</option>
                                    <option value="Other Role Not Listed">Other Role Not Listed</option>
                                    <option value="Security Professional">Security Professional</option>
                                    <option value="Speaker/hosting">Speaker/hosting a session at this event</option>
                                    <option value="Student">Student</option>
                                    <option value="SysAdmin">SysAdmin</option>
                                    <option value="Technical Writer">Technical Writer</option>
                                    <option value="Decline to specify">Decline to Specify</option>
                                </select>
                            </div>
                            
                            <div>
                                <label htmlFor="about" className="mt-2 block text-sm font-medium text-gray-900 dark:text-gray-400">About you</label>
                                <textarea id="about" rows={4} className="mt-2 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="I own a light saber..."></textarea>
                            </div>
                            <div>
                                <label htmlFor="linkedin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">LinkedIn Profile URL</label>
                                <input type="url" id="linkedin" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="https://www.linkedin.com/in/johndoe/" required />
                            </div>

                            <div>
                                <label htmlFor="github" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">GitHub Profile URL</label>
                                <input type="url" id="github" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="https://github.com/johndoe" required />
                            </div>

                            <div>
                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog/Website URL</label>
                                <input type="url" id="website" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="https://johndoe.com" required />
                            </div>

                            <div>
                                <label htmlFor="event_parts" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">What parts of the event are you interested in?</label>
                                <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                        <div className="flex items-center">
                                            <input id="day1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="day1" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Workshop - Day 1</label>
                                        </div>
                                    </li>
                                    <li className="w-full dark:border-gray-600">
                                        <div className="flex items-center pl-8">
                                            <input id="day2" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="day2" className="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Conference - Day 2</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <label htmlFor="diet" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Dietary restrictions</label>
                                <select id="diet" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option value="None">None</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Non-vegetarian">Non-vegetarian</option>
                                    <option value="Eggetarian">Eggetarian</option>
                                    <option value="Vegan">Vegan</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="tshirt" className="block text-sm font-medium text-gray-900 dark:text-gray-400">T-shirt size</label>
                                <select id="tshirt" className="mt-2 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="flex items-center h-5">
                                    <input id="tnc_checkbox" aria-describedby="tnc_checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="ml-2 text-sm">
                                    <label htmlFor="tnc_checkbox" className="font-medium text-gray-900 dark:text-gray-300">Agree to Terms and Conditions?</label>
                                    <p id="tnc_checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">I have read and agree to the GDG Event Participation Terms and acknowledge that Google will use any information I provide in connection with the Google Developer Group program and events in accordance with Google’s Privacy Policy. I also agree to adhere to the GDG event code of conduct for my attendance at any GDG event, both in-person and online.</p>
                                </div>
                            </div>
                            <div className="flex mt-2">
                                <div className="flex items-center h-5">
                                    <input id="application_checkbox" aria-describedby="application_checkbox-text" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                </div>
                                <div className="ml-2 text-sm">
                                    <label htmlFor="application_checkbox" className="font-medium text-gray-900 dark:text-gray-300">Agree to ticketing terms?</label>
                                    <p id="application_checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-300">Filling this form does not guarentee access to the event. The details of my submission will be reviewed in all fairness complying with the Code of Conduct of the event. On availability of seats I shall be sent a Ticket Claim email which I must claim within 72 hours from receiving the email, failing which my ticket will be transferred to those on the waitlist and I can no longer make any claim on it nor will show up to the event without a confirmation ticket.</p>
                                </div>
                            </div>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                        </form>
                    </div>
                </section>
            </form>
        </>
    )
}

export default Forms