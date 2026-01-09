import Avatar from "./Avatar";
import UserInfo from "./UserInfo";
import CommentText from "./CommentText";

function Comment() {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Avatar imageUrl="https://via.placeholder.com/50" />
      <div>
        <UserInfo username="Fadhli" />
        <CommentText text="React JS adalah library JavaScript open-source yang digunakan untuk membangun antarmuka pengguna (UI) yang interaktif dan dinamis untuk aplikasi web dan mobile, dengan pendekatan berbasis komponen yang dapat digunakan kembali untuk membangun UI yang kompleks secara efisien" />
      </div>
    </div>
  );
}

export default Comment