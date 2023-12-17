import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import ProfileAvatar from '../molecules/ProfileAvatar';
import ProfileInfo from '../molecules/ProfileInfo';

const ProfileCard = ({ userData, openUserProfile }) => (
  <Card sx={{ maxWidth: 345 }}>
    <ProfileAvatar userData={userData} />
    <ProfileInfo userData={userData} />
    <Button variant="contained" fullWidth onClick={openUserProfile}>
      View Profile
    </Button>
  </Card>
);

export default ProfileCard;