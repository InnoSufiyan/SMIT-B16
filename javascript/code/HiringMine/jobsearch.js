console.log("==>> javascript is running")

const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"))

const allJobs = JSON.parse(localStorage.getItem('allJobs')) || []

function saveJobHandler() {
    const companyNameInput = document.querySelector('#companyNameInput')
    const designationInput = document.querySelector('#designationInput')
    const salaryInput = document.querySelector('#salaryInput')
    const viewsInput = document.querySelector('#viewsInput')
    const countryInput = document.querySelector('#countryInput')
    const cityInput = document.querySelector('#cityInput')

    const jobDetails = {
        companyName: companyNameInput.value,
        designation: designationInput.value,
        salary: salaryInput.value,
        views: viewsInput.value,
        country: countryInput.value,
        city: cityInput.value,
        postedBy: loggedInUser
    }

    console.log(jobDetails, "=>> job Details")

    allJobs.push(jobDetails)

    localStorage.setItem('allJobs', JSON.stringify(allJobs))

    loadAllJobs()
}

const myJobUI = `<div id="jobDetail">
            <div id="firstDiv">
                <h1>CompanyName</h1>
                <div class="companyLogo">
                    <img src="./assets/Logo.png" alt="">
                </div>
            </div>
            <h1>Job Designation</h1>
            <h1>Salary</h1>
            <h1>ATS</h1>
            <p style="text-align: end;">14 views</p>
            <h1>Location</h1>
            <div id="hoursAndPostedBy">
                <h1>6 hours</h1>
                <h1>Posted By <span>Sufiyan</span></h1>
            </div>
        </div>`


function loadAllJobs() {
    const allJobs = JSON.parse(localStorage.getItem('allJobs')) || []
    const modifiedJobsForUI = allJobs.map(function (singleJob) {
        return `<div id="jobDetail">
            <div id="firstDiv">
                <h1>${singleJob.companyName}</h1>
                <div class="companyLogo">
                    <img src="./assets/Logo.png" alt="">
                </div>
            </div>
            <h1>${singleJob.designation}</h1>
            <h1>${singleJob.salary}</h1>
            <h1>ATS</h1>
            <p style="text-align: end;">${singleJob.views} views</p>
            <h1>${singleJob.city}, ${singleJob.country}</h1>
            <div id="hoursAndPostedBy">
                <h1>6 hours</h1>
                <h1>Posted By <span>${singleJob.postedBy.userName}</span></h1>
            </div>
        </div>`
    })

    console.log(modifiedJobsForUI, "==>> modifiedJobsForUI")

    const allJobsUI = document.querySelector('#allJobs')

    allJobsUI.innerHTML = modifiedJobsForUI.join('')


}

loadAllJobs()