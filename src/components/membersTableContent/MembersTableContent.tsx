import { ReactElement, useContext } from 'react';
import MembersTableRow from '../../components/membersTableRow/MembersTableRow';
import MembersContext from '../../contexts/MembersContext';

const MembersTableContent = (): ReactElement => {
  const { members } = useContext(MembersContext);

  return (
    <tbody>
      {members.reverse().map((member) => {
        const fullName = `${member.firstName}  ${member.lastName}`;

        return (
          <MembersTableRow
            photo={member.photo as string}
            fullName={fullName}
            reportSubject={member.reportSubject}
            email={member.email}
            key={member.id}
          />
        );
      })}
    </tbody>
  );
};

export default MembersTableContent;
