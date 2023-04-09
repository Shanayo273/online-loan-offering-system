package in.bushansirgur.onlinebookstore.repository;

import in.bushansirgur.onlinebookstore.entity.User;
import in.bushansirgur.onlinebookstore.entity.UserAdmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserAdminRepository extends JpaRepository <UserAdmin, Long>{

}
