## Component Hierarchy

**HomeContainer**
* AuthFormContainer
* Home

**AuthFormContainer**
* AuthForm

**DashboardContainer**
* Navbar
* Sidebar/User Information
* Bookings Container

**BookingsContainer**
* Bookings
* Guests

**SofasContainer**
* Navbar
* Search Container
* Search Results Container
* Map

**SearchResultsContainer**
* Search Result
* Request Container

**RequestContainer**
* Request

**SearchContainer**
* Search

## Routes

|Path                   |Component              |
|-----------------------|-----------------------|
|"/"                    |"HomeContainer"        |
|"/sign-up"             |"AuthFormContainer"    |
|"/sign-in"             |"AuthFormContainer"    |
|"/dashboard"           |"DashboardContainer"   |
|"/sofas"               |"SofasContainer"       |
|"/sofas/:id/request"   |"RequestContainer"     |
