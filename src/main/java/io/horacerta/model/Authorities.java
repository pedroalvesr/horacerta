package io.horacerta.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Authorities {

   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;

   @ManyToOne
   @JoinColumn(name = "users_id")
   private Users user;

   @Column(nullable = false)
   private String authority;

   private String username;

   public Authorities() {
   };

   public Authorities(Users user, String authority) {
      this.setAuthority(authority);
      this.setUser(user);
   }

   public Users getUser() {
      return user;
   }

   public void setUser(Users user) {
      this.user = user;
   }

   public String getAuthority() {
      return authority;
   }

   public void setAuthority(String authority) {
      this.authority = authority;
   }

   public String getUsername() {
      return username;
   }

   public void setUsername(String username) {
      this.username = username;
   }

}
