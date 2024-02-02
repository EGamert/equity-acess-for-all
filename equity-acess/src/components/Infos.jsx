import Info from './Info'
import './Infos.css'

const Infos = ()=>{

    const data = [
        {
            img: "https://main.mohfw.gov.in/sites/default/files/HMISLogo-PNG.png",
            header: "Health Management Information System",
            text: " This portal will be a gateway to wealth of information regarding the health indicators of India. The information available on this portal is derived data from data uploaded by the States/ UTs. HMIS data specifically designed to support planning, management, and decision making based on on Grading of facilities, various indicators at Block, District at State as well as National Level.",
            link: "https://hmis.mohfw.gov.in/#!/"
        },
        {
            img: "https://main.mohfw.gov.in/sites/default/files/cghs_2.jpg",
            header: "Central Government Health Scheme",
            text: "With the aim to facilitate seamless delivery of health care services and prompt redressal of grievances within the CGHS System Local and Zonal Advisory committees (LAC and ZAC) have been constituted at each CGHS Wellness Center and Additional Director level. The committees shall meet once in every month and work towards effective functioning of CGHS Wellness Centers, streamlining reimbursement claims, evaluate services of empaneled chemists, hospitals and diagnostic centres and resolve grievances.",
            link: "https://cghs.gov.in/CghsGovIn/faces/ViewPage.xhtml"
        },
        {
            img: "https://main.mohfw.gov.in/sites/default/files/national-health-mission.png",
            header: "National Health Mission",
            text: "The National Health Mission (NHM) encompasses its two Sub-Missions, the National Rural Health Mission (NRHM) and the newly launched National Urban Health Mission (NUHM). The main programmatic components include Health System Strengthening in rural and urban areas- Reproductive-Maternal- Neonatal-Child and Adolescent Health (RMNCH+A), and Communicable and Non-Communicable Diseases. The NHM envisages achievement of universal access to equitable, affordable & quality health care services that are accountable and responsive to people's needs.",
            link: "https://nhm.gov.in/"
        },
        /* More can be made here, I have to sleep tooooo */
    ]

    return(
        <div className="infos">
            <div className="info-item">
            {
                data.map((item, index) => (
                    <Info key={index} {...item} />
                ))
                
            }
            </div>
        </div>
    )
}

export default Infos