import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function UserProfile() {
  const history = useHistory();
  const { userId } = useParams();

  const user = useSelector((state) => state.users[userId]);
  const showcase = useSelector((state) => Object.values(state.showcase));

  const usershowcases = showcase.filter((showcase) => showcase.userId === user.id);

  if (!user) return null;
  const {username} = user;

  return (
      <>
      <div>
          <h1>
              {`${username}`}
          </h1>
          <h2>About {username}</h2>
          <p></p>
      </div>
      <div>
          {usershowcases.map((projects)=> {
              const {title, description, techCategoryId, id} = projects;
              return(
                  <div
                      key={id}
                      onClick={() => {
                          history.push(`/showcase/${id}`);
                      }}
                      >
                          <div>
                              <h3>{title}</h3>
                              <h3>{description}</h3>
                              <h3>Area of profession:{techCategoryId}</h3>

                              
                          </div>
                    {/* image here */}
                  </div>
              )
          })}
      </div>
      </>
  )
}
  export default UserProfile;