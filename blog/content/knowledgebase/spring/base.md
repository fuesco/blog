---
title: What is Spring Framework?
path: "/spring/intro-to-spring"
excerpt: This serves as a base template for pages in the knowledge base.
---

<p align="center">
  <img alt="fueslabs logo" src="https://cdn.fues.us/fueslabs/f-sharp-light.svg" height="144px" style="display:block;margin:0 auto;"/>
</p>

## FUESLABS® BLOG

All rights reserved.

## Credits

Want more on this topic? Go to [marcobehler.com](https://marcobehler.com/guides/spring-framework/)

## Resources

- [spring.io](https://spring.io/)
- [Spring Boot](https://spring.io/guides/gs/spring-boot/)
- [Spring Framework](https://spring.io/projects/spring-framework)

## What is Spring Framework?

Spring is a **dependency injection container**, with convenience layers like database access, proxies, aspect-oriented programming, RPC, and a web MVC framework. Spring manages classes you write and their dependencies for you (**I**nversion **o**f **C**ontrol).

## Spring's Dependency Injection Container

### What is an ApplicationContext?

Has control over all your classes and can manage them appropriately (creates them with their dependencies).

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import javax.sql.DataSource;

public class MyApplication {
  
  public static void main(String[] args) {
    ApplicationContext ctx = new AnnotationConfigApplicationContext(someConfigClass); // (1)

    UserDao userDao = ctx.getBean(UserDao.class); // (2)
    User user1 = userDao.findById(1);
    User user1 = userDao.findById(2);

    DataSource dataSource = ctx.getBean(DataSource.class); // (3)
  }
}
```

1. We construct out Spring ApplicationContext.

2. The ApplicationContext can give us a fully configured UserDao. (with its dependency set)

3. The ApplicationContext can also give us the DataSource directly, which the same DataSource that it sets inside the UserDao.

### Spring `@Bean` Annotation

Think of the methods inside you ApplicationContext configuration class as **factory methods**. The instances that those factory methods create are called **beans**. (Spring creates beans and they are under its control)

### What are Spring Bean Scopes?

How many **instances** of the DAOs in question should Spring create? To answer this architecture question, you add a **scope**:

- **Singleton**: All of your DAOs share the same DataSource.
- **Prototype**: All of your DAOs create their own DataSource.
- **OR**: Should your beans have even smaller scopes like HttpRequest, or HttpSession, or WebSocket.

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MyApplicationContextConfiguration {

    @Bean
    @Scope("singleton")
    // @Scope("prototype") etc.
    public DataSource dataSource() {
        MysqlDataSource dataSource = new MysqlDataSource();
        dataSource.setUser("root");
        dataSource.setPassword("s3cr3t");
        dataSource.setURL("jdbc:mysql://localhost:3306/myDatabase");
        return dataSource;
    }
}
```

- `@Scope("singleton")`: The bean will be created with one instance.
- `@Scope("prototype")`: When someone needs a reference to your bean, Spring will create a new one. (Caveat: injecting prototypes in singletons)
- `@Scope("session")`: The bean will be created for every use HTTP session.
- `@Scope("etc.")`: etc.

### What is Spring's Java Config?

Explicitly configuring your beans in your ApplicationContext configuration, with the help of the @Bean annotated Java method. This is called Spring's Java Config.

### Spring's @ComponentScan Annotation

It tells Spring: Hey! Have a look at all Java classes in the **same package** as the context configuration if they look like a Spring Bean.

### What are Spring's @Component and @Autowired Annotations?

It tells Spring, if you find me annotated with the `@Component` through your `@ComponentScan`, then I want to be a Spring bean, managed by you, the Spring dependency injection container!

The `@Autowired` constructor argument: Spring will automatically inject the DataSource that is configured via your `@Bean` method.

### Constructor Injection vs. Field Injection

There are many debates about this topic online. According to [marcobehler.com](https://marcobehler.com/):

1. He does not prefer one method over the other.
2. Consistency is king. Do no use constructor injection for 80% of beans, field injection for 10% and method injection for the remaining 10%.
3. Spring's approach from the official docs seems sensible: Use constructor injection for mandatory dependencies and setter/field for optional dependencies. Be warned. Be **consistent**.

### Summary: Spring's IoC Container

ApplicationContexts, Beans, dependencies and different methods of dependency injection.

## Spring's Aspect-Oriented Programming (AOP)

Dependency injection might lead to better structured programs, but injection a dependency here and there is not what Spring's ecosystem is all about. Let's look at a simple ApplicationContextConfiguration again:

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Annotation;

@Configuration
public class MyApplicationContextConfiguration {

  @Bean
  public UserService userService() // (1)
    return new UserService();
  }
}
```

1. Assume UserService is a class that lets you find users from a database table - or save users to that database table.

Here is where Spring's hidden feature comes in:

Spring reads in that context configuration, containing the @Bean method you wrote and therefore Spring knows how to create and inject UserService beans.

Spring can cheat and create something else than your UserService. How? Why?

### Spring's Proxy Facilities

Under the hood, any @Bean can return you something that looks and feels like a UserService, but isn't.

It can return you a **proxy**.

The proxy will at some point delegate to the UserService you wrote, but first, will execute its own functionality.

Spring, by default, will create dynamic `Cglib` proxies, that do not need an interface for proxying to work (like JDK's internal proxy mechanism).

### Why a Proxy?

Proxies allow Spring to give your beans additional features. All without modifying your code. In short, this is what **aspect-oriented programming** (AOP) is. A popular example of AOP is the Spring `@Transactional` annotation.

### Spring's `@Transactional` Annotation

```java
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
public class UserService {

  @Transactional // (2)
  public User activateUser(Integer id) {
    // execute some sql;
    // send an event;
    // send an email;
  }
}
```

## Spring's Resources

Think, how could you access a file in Java via HTTP or FTP. You could use Java's URL class and write some more code.

Or similarly, you could read in files from your application's classpath? Or from servlet context. This all requires some boilerplate code to get started and the code would differ in each use case (URLs, classpaths, servlets contexts). The solution is Spring's resource abstraction:

```java
import org.springframework.core.io.Resource;

public class MyApplication {

    public static void main(String[] args) {
      ApplicationContext ctx = new AnnotationConfigApplicationContext(someConfigClass);              // (1)

      Resource aClasspathTemplate = ctx.getResource("classpath:somePackage/application.properties"); // (2)
      Resource aFileTemplate = ctx.getResource("file:///someDirectory/application.properties");      // (3)
      Resource anHttpTemplate = ctx.getResource("https://marcobehler.com/application.properties");   // (4)
      Resource depends = ctx.getResource("myhost.com/resource/path/myTemplate.txt");                 // (5)
      Resource s3Resources = ctx.getResource("s3://myBucket/myFile.txt");                            // (6)
    }
}
```

1. ApplicationContext **required**.
2. `classpath:` Prefix: Spring will look for a resource on your application classpath.
3. `file:///` Prefix: Spring will look for a file on your hard drive.
4. `https://` Prefix: Spring will look for a file on the internet.
5. `custom.com/` Prefix: depends on your kind of applicationContext configured.
6. `s3://` Prefix: Does *not* work out of the box. With Spring Cloud, you can directly access `s3//` paths.

Helpful methods:

```java
public interface Resource extends InputStreamSource {
  boolean exists();

  String getFileName();

  File getFile() throws IOException;

  InputStream getInputStream() throws IOException;

  // etc.
}
```

### Spring's Environment

Any application will read in properties. Properties like database usernames, passwords, email server configuration, Stripe payment detail configuration, etc.

All these properties live in `.properties` files and there could be any number of them.

```java
import org.springframework.core.env.Environment;

Environment env = appCtx.getEnvironment();            // (1)
String databaseUrl = env.getProperty("database.url"); // (2)
// etc.
```

1. ApplicationContext will return you access to the current program's environment.
2. The environment lets you access the properties and special methods on them: `env.containsProperty("database.password")`.

### Spring's `@PropertySources`