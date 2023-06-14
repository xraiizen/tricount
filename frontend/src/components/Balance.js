import React, { useState, useEffect } from 'react';
import { getBalance, getUserByID } from '../services/api';

const Balance = () => {
  const [balances, setBalances] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchBalance();
  }, []);

  const fetchBalance = async () => {
    try {
      const balanceData = (await getBalance()).data;
      setBalances(balanceData);
      const userIDs = Object.keys(balanceData);

      const fetchedUsers = await Promise.all(
        userIDs.map(async (userID) => {
          const userData = await getUserByID(userID);
          return userData;
        })
      );

      setUsers(fetchedUsers);
    } catch (error) {
      console.error('Erreur lors de la récupération de la balance', error);
    }
  };

  if (!balances) {
    return <div>Chargement de la balance...</div>;
  }

  const filteredUsers = users.filter((user, index) => {
    const userBalance = balances[user._id];
    return userBalance.totalPaid !== 0 || userBalance.totalOwed !== 0;
  });

  return (
    <div>
      {filteredUsers.map((user, index) => {
        const userBalance = balances[user._id];
        return (
          <div key={user._id} style={balanceItemStyle}>
            <h3 style={userNameStyle}>
              Utilisateur {user.firstName} {user.lastName}
            </h3>
            {userBalance.totalPaid !== 0 && (
              <p style={balanceLabelStyle}>Total payé : {userBalance.totalPaid}€</p>
            )}
            {userBalance.totalOwed !== 0 && (
              <p style={balanceLabelStyle}>Total dû : {userBalance.totalOwed}€</p>
            )}
          </div>
        );
      })}
    </div>
  );
};

// Styles
const balanceItemStyle = {
  marginBottom: '20px',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
};

const userNameStyle = {
  marginBottom: '10px',
  fontSize: '18px',
};

const balanceLabelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

export default Balance;
