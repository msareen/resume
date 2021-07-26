import * as resumeData from '../data.json';


// Get resume data as promise so later this could be replace by 
// actual http api call.
export function getResumeData() {
    let dataPromise = new Promise((resolve) => {
        let data = resumeData;
        resolve(data.default);
    })
    return dataPromise;
}

export function getResumeDataInitialized() {
    return {
        'name': '',
        'socialNetworks': [],
        'profile': {},
        'aboutMe': {},
        'professionalSkills': [],
        'experience': [],
        'contactDetails': {}
    }
}