import Title from "../Title/Title"
// import app from '../../Services/firebase';
import 'firebase/firestore';
import { useState } from "react";

import {getFirestore, addDoc, collection} from "firebase/firestore";
import app from "../../Services/firebase";

const Form = () => {
    const [pronoun, setPronoun]=useState("he/him");
    const [role, setRole]= useState("Architect");
    const [experience, setExperience] = useState('false');
    const [confirm, setConfirm] = useState('');
    const [email, setEmail]= useState('');
    const [contactNumber, setContactNumber]= useState('');
    const [enrolled, setEnrolled] = useState('');
    const [organization, setOrganization] = useState('');
    const [about, setAbout] = useState('');
    const [profile, setProfile] = useState('');
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
            LinkedIn: profile,
            GitHub: profile,
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
            <Title heading="Registration Form" />
            <form className="flex justify-center items-center flex-col p-8" onSubmit={RegistrationEvent}>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="inline-block relative w-64">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                            My preferred pronoun is...*
                        </label>
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => {console.log(e.target.value);setPronoun(e.target.value)}}>
                            <option value="he/him">he/him</option>
                            <option value="she/her">she/her</option>
                            <option value="they/them">they/them</option>
                            <option value="Decline to specify">Decline to specify</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="inline-block relative w-64">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                            I am a... (Select the title or role that's the closest fit.)*
                        </label>
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => {console.log(e.target.value);setRole(e.target.value)}}>
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
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                        My level of developer experience is...*
                    </label>
                    <div className="flex items-center mb-4">
                        <input type="radio" value="Fundamental Awareness (basic knowledge)" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fundamental Awareness (basic knowledge)</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" value="Novice (limited experience)" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Novice (limited experience)</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" value="Intermediate (practical application)" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Intermediate (practical application)</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" value="Advanced (applied theory)" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Advanced (applied theory)</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" value="Expert (recognized authority)" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Expert (recognized authority)</label>
                    </div>
                    <div className="flex items-center">
                        <input type="radio" value="Not applicable" name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Not applicable</label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" value="yes" onChange={(e) => {console.log(e.target.value);setConfirm(e.target.value)}}></input>
                    <span className="text-sm">
                        By checking this box, I confirm that:*
                    </span>
                    </label>
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                        I have read and agree to the GDG Event Participation Terms and acknowledge that Google will use any information I provide in 
                        connection with the Google Developer Group program and events in accordance with Google’s Privacy Policy. I also agree to adhere to 
                        the GDG event code of conduct for my attendance at any GDG event, both in-person and online.
                    </label>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Email*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="your email" onChange={(e) => {console.log(e.target.value);setEmail(e.target.value)}}></input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Phone Number*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="your phone number" onChange={(e) => {console.log(e.target.value);setContactNumber(e.target.value)}}></input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" value="yes" onChange={(e) => {console.log(e.target.value);setEnrolled(e.target.value)}}></input>
                    <span className="text-sm">
                        Are you currently enrolled in a full-time undergraduate academic course?*
                    </span>
                    </label>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Organization/College*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Organization" onChange={(e) => {console.log(e.target.value);setOrganization(e.target.value)}}></input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        About you*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="About you" onChange={(e) => {console.log(e.target.value);setAbout(e.target.value)}}></input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        LinkedIn Profile Link*
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Linkedin Profile" onChange={(e) => {console.log(e.target.value);setProfile(e.target.value)}}></input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        GitHub Profile Link
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="GitHub Profile" onChange={(e) => {console.log(e.target.value);setProfile(e.target.value)}}></input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Blog/Website
                    </label>
                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Blog/Website" onChange={(e) => {console.log(e.target.value);setBlog(e.target.value)}}></input>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Which parts of the event are you interested in?*
                    </label>
                    <div className="flex items-center mb-4">
                        <input type="checkbox" value="yes" name="default-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {console.log(e.target.value);setWorkshop(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Workshop - Day 1 - 27 August, 2022</label>
                    </div>
                    <div className="flex items-center">
                        <input type="checkbox" value="yes" name="default-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={(e) => {console.log(e.target.value);setConference(e.target.value)}}></input>
                        <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Conference - Day 2 - 28 August, 2022</label>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="inline-block relative w-64">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Dietary restrictions*
                        </label>
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => {console.log(e.target.value);setDiet(e.target.value)}}>
                            <option value="None">None</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Non-vegetarian">Non-vegetarian</option>
                            <option value="Eggetarian">Eggetarian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Other">Other</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="inline-block relative w-64">
                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                            T-shirt Size*
                        </label>
                        <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" onChange={(e) => {console.log(e.target.value);setTsize(e.target.value)}}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-2">
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox" value="yes" onChange={(e) => {console.log(e.target.value);setUnderstand(e.target.value)}}></input>
                    <span className="text-sm">
                        By checking this box, I understand that:*
                    </span>
                    </label>
                    <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Filling this form does not guarentee access to the event. The details of my submission will be reviewed in all fairness 
                    complying with the Code of Conduct of the event. On availability of seats I shall be sent a Ticket Claim email which I must claim 
                    within 72 hours from receiving the email, failing which my ticket will be transferred to those on the waitlist and I can no longer 
                    make any claim on it nor will show up to the event without a confirmation ticket.
                    </label>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                        Submit
                    </button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Form