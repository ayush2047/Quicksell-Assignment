import React, { useState, useEffect } from 'react';
import './App.css';
import { Camera } from 'lucide-react';
import KanbanIcon from './KanbanIcon';

const PRIORITY_MAP = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority"
};

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const getPriorityIcon = (priority) => {
    switch(priority) {
      case 4: return <KanbanIcon type="high-priority" />;
      case 3: return <KanbanIcon type="medium-priority" />;
      case 2: return <KanbanIcon type="low-priority" />;
      case 1: return <KanbanIcon type="low-priority" />;
      default: return <KanbanIcon type="no-priority" />;
    }
  };

  const sortTickets = (ticketsToSort) => {
    return [...ticketsToSort].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  };

  const groupTickets = () => {
    let grouped = {};
    
    if (grouping === 'status') {
      grouped = {
        'Todo': [],
        'In progress': [],
        'Done': [],
        'Canceled': []
      };
      tickets.forEach(ticket => {
        if (!grouped[ticket.status]) grouped[ticket.status] = [];
        grouped[ticket.status].push(ticket);
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        grouped[user.name] = [];
      });
      tickets.forEach(ticket => {
        const user = users.find(u => u.id === ticket.userId);
        if (user) {
          grouped[user.name].push(ticket);
        }
      });
    } else if (grouping === 'priority') {
      Object.keys(PRIORITY_MAP).forEach(priority => {
        grouped[PRIORITY_MAP[priority]] = [];
      });
      tickets.forEach(ticket => {
        grouped[PRIORITY_MAP[ticket.priority]].push(ticket);
      });
    }

    Object.keys(grouped).forEach(key => {
      grouped[key] = sortTickets(grouped[key]);
    });

    return grouped;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="app">
      <header>
        <div className="display-button" onClick={() => setShowDropdown(!showDropdown)}>
          <Camera size={16} />
          <span>Display</span>
          <span className="arrow">▼</span>
        </div>

        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item">
              <span>Grouping</span>
              <select value={grouping} onChange={(e) => setGrouping(e.target.value)}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="dropdown-item">
              <span>Ordering</span>
              <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </header>
      <div className="board">
        {Object.entries(groupedTickets).map(([group, tickets]) => (
          <div key={group} className="column">
            <div className="column-header">
              <div className="column-title">
                <span className="group-icon">
                  {group === 'Todo' && <KanbanIcon type="todo" />}
                  {group === 'In progress' && <KanbanIcon type="in-progress" />}
                  {group === 'Done' && <KanbanIcon type="done" />}
                  {group === 'Canceled' && <KanbanIcon type="canceled" />}
                  {group === 'Urgent' && <KanbanIcon type="high-priority" />}
                  {group === 'High' && <KanbanIcon type="high-priority" />}
                  {group === 'Medium' && <KanbanIcon type="medium-priority" />}
                  {group === 'Low' && <KanbanIcon type="low-priority" />}
                  {group === 'No priority' && <KanbanIcon type="no-priority" />}
                </span>
                <span>{group}</span>
                <span className="ticket-count">{tickets.length}</span>
              </div>
              <div className="column-actions">
                <button><KanbanIcon type="add" /></button>
                <button><KanbanIcon type="menu" /></button>
              </div>
            </div>

            {tickets.map(ticket => (
              <div key={ticket.id} className="ticket">
                <div className="ticket-header">
                  <span className="ticket-id">{ticket.id}</span>
                  <div className="user-avatar">
                    <img src={`https://api.dicebear.com/7.x/initials/svg?seed=${
                      users.find(u => u.id === ticket.userId)?.name
                    }`} alt="avatar" />
                    <span className={`status-dot ${
                      users.find(u => u.id === ticket.userId)?.available ? 'available' : ''
                    }`}></span>
                  </div>
                </div>
                <div className="ticket-title">{ticket.title}</div>
                <div className="ticket-tags">
                  <div className="priority-tag">
                    <span className="tag-icon">{getPriorityIcon(ticket.priority)}</span>
                  </div>
                  {ticket.tag.map((tag, index) => (
                    <div key={index} className="feature-tag">
                      <span><KanbanIcon type="todo" /></span>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
