const initialStata = {
  listUser: [
    {
      maSV: 123,
      hoTen: "Trần Vĩ Hùng",
      phone: "0396773764",
      email: "tranvihung236.work@gmail.com",
    },
    {
      maSV: 456,
      hoTen: "Nguyễn Minh Tâm",
      phone: "0396773764",
      email: "tranvihung236.work@gmail.com",
    },
  ],
  userEdit: null,
  keywork: "",
};

const userReducer = (state = initialStata, action) => {
  console.log(action);
  switch (action.type) {
    case "DELETE_USER": {
      let listUserClone = [...state.listUser];
      const index = listUserClone.findIndex(
        (user) => user.maSV === action.payload
      );

      if (index !== -1) {
        listUserClone.splice(index, 1);

        state.listUser = listUserClone;
      }
      return { ...state };
    }
    case "GET_KEYWORD": {
      state.keywork = action.paymaload;
      return { ...state };
    }
    case "SUBMIT_USER": {
      let listUserClone = [...state.listUser];
      let user = action.payload;

      if (user.maSV === listUserClone.maSV) {
      } else {
        listUserClone.push(user);
      }

      state.listUser = listUserClone;

      return { ...state };
    }
    case "EDIT_USER": {
      state.userEdit = action.payload;
      return { ...state };
    }

    default:
      break;
  }
  return { ...state };
};

export default userReducer;
