import "./App.scss";
import HeaderCard from "./components/HeaderCard";
import MultiplePlatforms from "./components/MultiplePlatforms";
import PostingSchedule from "./components/PostingSchedule";
import ScheduleSocialMedia from "./components/ScheduleSocialMedia";
import FollowerGrowth from "./components/FollowerGrowth";
import AudienceGrowth from "./components/AudienceGrowth";
import CreatePost from "./components/CreatePost";
import AiContent from "./components/AiContent";

function App() {
  return (
    <main className="container">
      <div className="card-container">
        <HeaderCard />
        <MultiplePlatforms />
        <PostingSchedule />
        <ScheduleSocialMedia />
        <FollowerGrowth />
        <AudienceGrowth />
        <div className="card-packed">
          <CreatePost />
          <AiContent />
        </div>
      </div>
    </main>
  );
}

export default App;
