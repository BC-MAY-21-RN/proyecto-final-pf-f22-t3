import React, {useState} from 'react';
import useAuth from '../hooks/useAuth';
import VolunteerInfo from '../components/volunteers/VolunteerInfo';
import VolunteerHome from '../components/volunteers/VolunteerHome';

const VolunteerScreen = () => {
  const {authUser} = useAuth();
  const [isVolunteer, setIsVolunteer] = useState(authUser.volunteer);

  return isVolunteer ? (
    <VolunteerHome />
  ) : (
    <VolunteerInfo setIsVolunteer={setIsVolunteer} />
  );
};

export default VolunteerScreen;
