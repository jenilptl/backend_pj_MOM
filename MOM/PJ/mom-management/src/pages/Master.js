import "./Master.css";
import { meetingTypes, staff } from "../data/dummyData";

const Master = () => {
  return (
    <div className="master-page">
      <h3>Master Configuration</h3>

      <div className="master-section">
        <h4>Meeting Types</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {meetingTypes.map((type) => (
              <tr key={type.MeetingTypeID}>
                <td>{type.MeetingTypeID}</td>
                <td>{type.MeetingTypeName}</td>
                <td>{type.Remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="master-section">
        <h4>Staff</h4>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {staff.map((s) => (
              <tr key={s.StaffID}>
                <td>{s.StaffID}</td>
                <td>{s.StaffName}</td>
                <td>{s.EmailAddress}</td>
                <td>{s.Remarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="master-note">
        Department and Venue masters will be configured here.
      </div>
    </div>
  );
};

export default Master;
