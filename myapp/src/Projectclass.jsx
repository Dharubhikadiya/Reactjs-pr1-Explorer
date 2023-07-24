const { Component } = require("react");

class Projectclass extends Component {
    render() {
        const { record,button,no} = this.props;
        return (
            <div>
                <center>
                    <h1>Student Data (Class Components)</h1>
                    <table border={1} cellPadding={15} cellSpacing={1}>
                        <thead>
                            <tr>
                                <td>Grid</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Password</td>
                                <td>Courses</td>
                                <td>City</td>
                                <td>{no}</td>
                            </tr>
                        </thead>
                        <tbody>
                            {record.map((val) => (
                                <tr key={val.grid}>
                                    <td>{val.grid}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>{val.course[0]} , {val.course[1]} , {val.course[2]} , {val.course[3]}</td>
                                    <td>{val.city}</td>
                                    <td><button onClick={() => button()}>Add</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </center>
            </div>
        );
    }
}


export default Projectclass;
