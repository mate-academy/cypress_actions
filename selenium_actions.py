# Basic level:
# 1. Fill all fields in forms except "picture"
# 2. Click on [Submit] button
# 3. Validate inputed data in modal window
# Site: https://demoqa.com/automation-practice-form

from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time
from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.support.ui import Select
# from selenium.webdriver.common.action_chains import ActionChains

input_data = {
    'first_name': 'Barack',
    'last_name': 'Obama',
    'email': 'whitehouse@gov.ua',
    'mobile_phone': '0504556321',
    'current_address': 'Whitehouse building 1a'

}

driver = webdriver.Chrome(executable_path="C:/Selenium/Chromedriver.exe")
driver.get("https://demoqa.com/automation-practice-form")

driver.find_element_by_css_selector('[id="firstName"]').send_keys(input_data['first_name'])
driver.find_element_by_css_selector('[id="lastName"]').send_keys(input_data['last_name'])
driver.find_element_by_css_selector('[id="userEmail"]').send_keys(input_data['email'])
driver.find_element_by_css_selector('[for="gender-radio-1"]').click()
driver.find_element_by_css_selector('[id="userNumber"]').send_keys(input_data['mobile_phone'])
driver.find_element_by_css_selector('[id="dateOfBirthInput"]').click()
driver.find_element_by_css_selector('.react-datepicker__day.react-datepicker__day--009').click()

move_element = driver.find_element_by_css_selector('[id="botton-text-10"]')
actions = ActionChains(driver)
actions.move_to_element(move_element).perform()

time.sleep(1)
driver.find_element_by_css_selector('[id="subjectsInput"]').send_keys('English', )
driver.find_element_by_css_selector('[id="subjectsInput"]').send_keys(Keys.ENTER)
driver.find_element_by_css_selector('[for="hobbies-checkbox-1"]').click()
driver.find_element_by_css_selector('[id="currentAddress"]').send_keys(input_data['current_address'])

move_element = driver.find_element_by_css_selector('[id="botton-text-10"]')
actions = ActionChains(driver)
actions.move_to_element(move_element).perform()
driver.find_element_by_xpath('//*[@id="state"]/div/div[1]').click()
driver.find_element_by_xpath('//*[@id="react-select-3-input"]').send_keys('NCR', Keys.ENTER)

driver.find_element_by_xpath('//*[@id="city"]/div/div[1]').click()
driver.find_element_by_css_selector('[id="react-select-4-input"]').send_keys('Noida', Keys.ENTER)
driver.find_element_by_css_selector('[id="submit"]').click()
