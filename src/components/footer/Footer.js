
import './Footer.scss';

export default function Footer(props) {
    return (
        <div className='md-5'>
           <div className='d-flex justify-content-center footer-font'>
                Made with ❤️ and react
           </div>
           <div className='d-flex justify-content-center'>
                <h4>{props.name}</h4>
           </div>
           <div className='d-flex justify-content-center'>
                <h6>
                    <a href={props.projectDetails} rel="noreferrer" target="_blank">Project Details</a>
                </h6>
           </div>
        </div>
    )
}