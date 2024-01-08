export function CVDisplay(data) {
    return (
        data.name && (
            <section className="cv-display">
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ textTransform: "uppercase"}}>{data.name}</h1>
                    <p>{data.email}</p>
                    <p>{data.phoneNumber}</p>
                    <p style={{ textAlign: "left" }}>{data.about}</p>
                </div>
                <div>
                    <h2>Education</h2>
                    <div className="field-value">
                        <h3>{data.schoolName}</h3>
                        <p>
                            {data.titleOfStudy &&
                                "( " + data.titleOfStudy + " )"}
                        </p>
                        <p>{data.dateOfStudyEnd}</p>
                    </div>
                    <p>{data.aboutSchool}</p>
                </div>
                <div>
                    <h2>Experiences</h2>
                    <div className="field-value">
                        <h3>{data.companyName}</h3>
                        <p>
                            {data.positionTitle &&
                                "( " + data.positionTitle + " )"}
                        </p>
                        <p>{data.skillsUsed}</p>
                        <p>
                            {data.dateOfStartOfCompany &&
                                data.dateOfStartOfCompany + "  -  "}
                            {data.dateOfEndOfCompany}
                        </p>
                    </div>
                    <p>{data.aboutExperience}</p>
                </div>
            </section>
        )
    );
}
