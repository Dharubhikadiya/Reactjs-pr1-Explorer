const { Component } = require("react");

class Pro extends Component {
    render() {

        const {record} = this.props;

        const datalist = record.map((data, index) => (
            <tr key={index}>
                <td>{data.grid}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>{data.course}</td>
                <td>{data.city}</td>
            </tr>
        ));
        return (
            <div>
            <table border={1}>{datalist}</table>
            </div>
        );
    }
}


export default Pro;
