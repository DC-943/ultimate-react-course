import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [addClick, setAddClick] = useState(false);
  const [addFriendArray, setFriendArray] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(1);

  function handleAddFriends(newfriend) {
    setFriendArray((addFriendArray) => [...addFriendArray, newfriend]);

    setAddClick(false);
  }

  function handleSetAddClick() {
    setAddClick((addClick) => {
      return !addClick;
    });
  }

  function handleSelection(friend) {
    // setSelectedFriend(friend);

    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));

    setAddClick(false);
  }

  function handleSplitBill(value) {
    console.log(value);

    setFriendArray((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          addFriendArray={addFriendArray}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {addClick && <Form onAddFriends={handleAddFriends} />}

        <Button onClick={handleSetAddClick}>
          {addClick ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ addFriendArray, onSelection, selectedFriend }) {
  const friends = addFriendArray;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          selectedFriend={selectedFriend}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  // console.log("the selectedfriend id:", selectedFriend.id);
  // console.log("the friend id:", friend.id);

  const isSelected = selectedFriend?.id === friend.id;
  //const isSelected = friend.id;
  if (selectedFriend === null) {
    console.log("selectedFriend is null");
  }
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you own {friend.name} {Math.abs(friend.balance)} dollars
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)} dollars
        </p>
      )}
      {friend.balance === 0 && <p> you and {friend.name} are even.</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function Form({ onAddFriends }) {
  const [addName, setAddName] = useState("");

  const [addImage, setAddImage] = useState("https://i.pravatar.cc/48?u=499477");

  function handleOnSubmit(e) {
    e.preventDefault();

    if (!(addImage && addName)) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: addName,
      image: `${addImage}?=${id}`,
      balance: 0,
    };
    console.log(newFriend);

    onAddFriends(newFriend);

    setAddName("");
    //  setAddImage("");
  }

  return (
    <div>
      {
        <form className="form-add-friend" onSubmit={handleOnSubmit}>
          {" "}
          <label className="">😊Friend name: </label>
          <input
            value={addName}
            onChange={(e) => setAddName(e.target.value)}
          ></input>
          <label className="">😂Image URL: </label>
          <input
            value={addImage}
            onChange={(e) => setAddImage(e.target.value)}
          ></input>
          <Button>Add</Button>
        </form>
      }
    </div>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");

  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>

      <label>😍Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      ></input>

      <label>🤷‍♀️Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      ></input>

      <label>😢{selectedFriend.name}'s expense</label>
      <input type="text" disabled value={paidByFriend}></input>

      <label>🥰Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(Number(e.target.value))}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Spill bill</Button>
    </form>
  );
}
