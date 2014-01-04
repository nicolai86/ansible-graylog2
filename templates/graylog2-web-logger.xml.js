<configuration>

  <conversionRule conversionWord="coloredLevel" converterClass="play.api.Logger$ColoredLevel" />

  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
     <file>/var/log/graylog2-web/application.log</file>
     <encoder>
       <pattern>%date - [%level] - from %logger in %thread %n%message%n%xException%n</pattern>
     </encoder>
   </appender>

  <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
    <encoder>
      <pattern>%coloredLevel %logger{15} - %message%n%xException{5}</pattern>
    </encoder>
  </appender>

  <logger name="play" level="INFO" />
  <logger name="application" level="INFO" />

  <root level="ERROR">
    <appender-ref ref="FILE" />
  </root>

</configuration>
