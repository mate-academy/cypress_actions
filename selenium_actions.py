1. Fill all fields in forms except "picture"
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form"""


from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.common.keys import Keys

driver = webdriver.Chrome()
driver.get("https://demoqa.com/automation-practice-form")

driver.find_element_by_css_selector("#firstName").send_keys('Name')
driver.find_element_by_css_selector("#lastName").send_keys('LastName')
driver.find_element_by_css_selector("#userEmail").send_keys("test@mail.com")
driver.find_element_by_css_selector("[for=gender-radio-2]").click()
driver.find_element_by_css_selector("#userNumber").send_keys("0950950000")
driver.find_element_by_css_selector("#dateOfBirthInput").click()
Birth = driver.find_element(By.CSS_SELECTOR, "#dateOfBirthInput")
Birth.click()
Birth.send_keys(Keys.LEFT_CONTROL, 'a')
Birth.send_keys('27 July 1992', Keys.ENTER)
driver.find_element_by_css_selector("#subjectsInput").send_keys("Com")
driver.find_element_by_css_selector("#subjectsInput").send_keys(Keys.ENTER)
driver.find_element_by_xpath('//*[@id="hobbiesWrapper"]/div[2]/div[1]/label').click()
driver.find_element_by_css_selector('[for="hobbies-checkbox-2"]').click()
driver.find_element_by_css_selector('[for="hobbies-checkbox-3"]').click()
driver.find_element_by_css_selector("#currentAddress").send_keys("Dnipro")
driver.find_element_by_css_selector("#currentAddress").send_keys(Keys.TAB)
driver.find_element_by_xpath('//*[@id="state"]').click()
driver.find_element_by_xpath('//*[@id="react-select-3-input"]').send_keys('NCR', Keys.ENTER)
driver.find_element_by_xpath('//*[@id="city"]/div/div[1]/div[1]').click()
driver.find_element_by_xpath('//*[@id="react-select-4-input"]').send_keys("Noida", Keys.ENTER)
driver.find_element_by_css_selector("#submit").click()
time.sleep(2)

driver.quit()
