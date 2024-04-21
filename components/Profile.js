import Image from 'next/image';

const Profile = ({ name, pic, email }) => {
  return (<>
    <div className="flex w-full flex-col-reverse items-start justify-between sm:flex-row">
      <div className="flex flex-col items-start gap-4 lg:flex-row">
        <Image src={pic} alt="profile picture"
          width={140}
          height={140}
          className="rounded-full object-cover" />
        <div className="mt-3">
          <h2 className="h2-bold text-dark100_light900">{name} </h2>
          <Image
            imgUrl="../public/assets/icons/mail.png"
            title="email"
          />
          {email}
        </div>
      </div>
    </div>
  </>);
};

export default Profile;
