
#  🎫 Ticket Management System
A frontend-only Ticket Management System built with **Next.js (App Router)**, **TypeScript**, and **React Hook Form**. Users can create, view, update, filter, and delete support tickets with persistence via LocalStorage.


## Installation

1. Clone the repository: ```bash git clone https://github.com/your-username/ticket-management-system.git cd ticket-management-system
## 🚀 Setup Instructions
      ### Prerequisites - Node.js **18.20.8**
       - npm **10.8.2**
       - Git (for version control)
## Acknowledgements

🛠️ Key Design Decisions
Next.js  App Router  
Chosen for modern routing, layout support, and scalability.

TypeScript  
Provides type safety and clearer contracts for ticket objects.

React Hook Form  
Used for reactive forms with validation and controlled inputs.

Custom Hook (useTickets)  
Encapsulates ticket CRUD logic, filtering, and persistence in one place.

LocalStorage Persistence  
Simple, frontend-only persistence without backend dependencies.

Component-based Architecture

TicketForm → Create/Edit tickets

TicketList → Render ticket collection

TicketCard → Individual ticket display

TicketFilters → Search and filter controls

Responsive UI  
CSS grid and flex layouts ensure usability across desktop and mobile.
