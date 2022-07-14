import Title from "../Title/Title"
// import app from '../../Services/firebase';
import 'firebase/firestore';
import { useState } from "react";

import {getFirestore, addDoc, collection} from "firebase/firestore";
import app from "../../services/firebase";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Forms = () => {
    const [pronoun, setPronoun]=useState("he/him");
    const [role, setRole]= useState("Architect");
    const [experience, setExperience] = useState('false');
    const [confirm, setConfirm] = useState('');
    const [email, setEmail]= useState('');
    const [contactNumber, setContactNumber]= useState('');
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
            <Title heading="Registration Form" />
            <form onSubmit={RegistrationEvent}>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>
                            My preferred pronoun is...*
                        </Form.Label>
                        <Form.Select onChange={(e) => {console.log(e.target.value);setPronoun(e.target.value)}}>
                            <option value="he/him">he/him</option>
                            <option value="she/her">she/her</option>
                            <option value="they/them">they/them</option>
                            <option value="Decline to specify">Decline to specify</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            I am a... (Select the title or role that's the closest fit.)*
                        </Form.Label>
                        <Form.Select onChange={(e) => {console.log(e.target.value);setRole(e.target.value)}}>
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
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            My level of developer experience is...*
                        </Form.Label>
                        <Form.Check 
                            type="radio"
                            value="Fundamental Awareness (basic knowledge)"
                            label="Fundamental Awareness (basic knowledge)"
                            onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}
                        />
                        <Form.Check 
                            type="radio"
                            value="Novice (limited experience)"
                            label="Novice (limited experience)"
                            onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}
                        />
                        <Form.Check 
                            type="radio"
                            value="Intermediate (practical application)"
                            label="Intermediate (practical application)"
                            onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}
                        />
                        <Form.Check 
                            type="radio"
                            value="Advanced (applied theory)"
                            label="Fundamental Awareness (basic knowledge)"
                            onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}
                        />
                        <Form.Check 
                            type="radio"
                            value="Expert (recognized authority)"
                            label="Expert (recognized authority)"
                            onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}
                        />
                        <Form.Check 
                            type="radio"
                            value="Not applicable"
                            label="Not applicable"
                            onChange={(e) => {console.log(e.target.value);setExperience(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check 
                            type="checkbox"
                            value="yes"
                            label="By checking this box, I confirm that:*"
                            onChange={(e) => {console.log(e.target.value);setConfirm(e.target.value)}}
                        />
                        <Form.Label>
                            I have read and agree to the GDG Event Participation Terms and acknowledge that Google will use any information I provide in 
                            connection with the Google Developer Group program and events in accordance with Google’s Privacy Policy. I also agree to adhere to 
                            the GDG event code of conduct for my attendance at any GDG event, both in-person and online.
                        </Form.Label>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="your email" required value={email} onChange={(e) => {console.log(e.target.value);setEmail(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number*</Form.Label>
                        <Form.Control type="tel" name="contact" required value={contactNumber} placeholder="your phone number" onChange={(e) => {console.log(e.target.value);setContactNumber(e.target.value)}} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Check 
                            type="checkbox"
                            value="yes"
                            label="Are you currently enrolled in a full-time undergraduate academic course?*"
                            onChange={(e) => {console.log(e.target.value);setEnrolled(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Organization/College*</Form.Label>
                        <Form.Control type="text" name="organization" required value={organization} onChange={(e) => {console.log(e.target.value);setOrganization(e.target.value)}} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>About you*</Form.Label>
                        <Form.Control type="text" name="about" required value={about} onChange={(e) => {console.log(e.target.value);setAbout(e.target.value)}} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>LinkedIn Profile Link*</Form.Label>
                        <Form.Control type="text" name="Linkedin" required value={linkedin} onChange={(e) => {console.log(e.target.value);setLinkedin(e.target.value)}} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>GitHub Profile Link</Form.Label>
                        <Form.Control type="text" name="github" required value={github} onChange={(e) => {console.log(e.target.value);setGithub(e.target.value)}} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Blog/Website</Form.Label>
                        <Form.Control type="text" name="blog/website" required value={blog} onChange={(e) => {console.log(e.target.value);setBlog(e.target.value)}} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Which parts of the event are you interested in?*
                        </Form.Label>
                        <Form.Check 
                            type="checkbox"
                            value="yes"
                            label="Workshop - Day 1 - 27 August, 2022"
                            onChange={(e) => {console.log(e.target.value);setWorkshop(e.target.value)}}
                        />
                        <Form.Check 
                            type="checkbox"
                            value="yes"
                            label="Conference - Day 2 - 28 August, 2022"
                            onChange={(e) => {console.log(e.target.value);setConference(e.target.value)}}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Dietary restrictions*
                        </Form.Label>
                        <Form.Select onChange={(e) => {console.log(e.target.value);setDiet(e.target.value)}}>
                            <option value="None">None</option>
                            <option value="Vegetarian">Vegetarian</option>
                            <option value="Non-vegetarian">Non-vegetarian</option>
                            <option value="Eggetarian">Eggetarian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Other">Other</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            T-shirt Size*
                        </Form.Label>
                        <Form.Select onChange={(e) => {console.log(e.target.value);setTsize(e.target.value)}}>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="2XL">2XL</option>
                            <option value="3XL">3XL</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Check 
                            type="checkbox"
                            value="yes"
                            label="By checking this box, I understand that:*"
                            onChange={(e) => {console.log(e.target.value);setUnderstand(e.target.value)}}
                        />
                        <Form.Label>
                            Filling this form does not guarentee access to the event. The details of my submission will be reviewed in all fairness 
                            complying with the Code of Conduct of the event. On availability of seats I shall be sent a Ticket Claim email which I must claim 
                            within 72 hours from receiving the email, failing which my ticket will be transferred to those on the waitlist and I can no longer 
                            make any claim on it nor will show up to the event without a confirmation ticket.
                        </Form.Label>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit" value="Submit">Submit</Button>
                </Modal.Footer>
            </form>
        </>
    )
}

export default Forms