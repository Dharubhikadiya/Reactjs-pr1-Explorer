const Projectfunction = ({record,btn,Number}) => {
    return (
        <center>
            <h1>Student Data (Function Components)</h1>
        <table border={1} cellPadding={15}>
            <thead>
                <tr>
                    <td>Grid</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Course</td>
                    <td>City</td>
                    <td>{Number}</td>
                </tr>
            </thead>
            <tbody>
                {
                    record.map((val) => {
                        return (
                            <tr key={val.grid}>
                                <td>{val.grid}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.password}</td>
                                <td>{val.course[0]} , {val.course[1]} , {val.course[2]} , {val.course[3]}</td>
                                <td>{val.city}</td>
                                <td><button onClick={() => btn()}>Add</button></td>
                            </tr>
                        )
                    }
                    )}
            </tbody>
        </table>
        </center>
    )
}
export default Projectfunction;