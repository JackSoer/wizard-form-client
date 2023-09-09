import './membersTableRow.scss';
import defImg from '../../assets/images/defAvatar.jpg';

type MembersTableRowProps = {
  photo: string;
  fullName: string;
  reportSubject: string;
  email: string;
};

const MembersTableRow = ({
  photo,
  fullName,
  reportSubject,
  email,
}: MembersTableRowProps) => {
  return (
    <tr className="member-row">
      <td className="member-row__item">
        <img className="member-row__img" src={photo ? photo : defImg} />
      </td>
      <td className="member-row__item">
        <p className="member-row__text">{fullName}</p>
      </td>
      <td className="member-row__item">
        <p className="member-row__text">{reportSubject}</p>
      </td>
      <td className="member-row__item">
        <a href={`mailto:${email}`} target="_blank">
          {email}
        </a>
      </td>
    </tr>
  );
};

export default MembersTableRow;
