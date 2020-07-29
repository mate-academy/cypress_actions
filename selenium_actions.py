"""
Basic level:
1. Fill all fields in forms except "picture" 
2. Click on [Submit] button
3. Validate inputed data in modal window
Site: https://demoqa.com/automation-practice-form

Advanced level:
Check next test cases:
1. Pagination 
2. Rows count selection
3. Add new worker
4. Delete worker
5. Delete all worker
6. Find worker in search field and edit it
7. Validate data in worker row after creating worker
8. Check search by all column values
https://demoqa.com/webtables
"""
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.select import Select
import unittest
import time


def wait_until_element_is_visible(driver, selector, seconds=20):
    WebDriverWait(driver, seconds).until(
        EC.visibility_of_element_located((By.CSS_SELECTOR, selector))
    )


def check_selected_option(select_tag):
    select = Select(select_tag)
    selected_option = select.first_selected_option
    return selected_option.text


def add_worker(driver, w_id=0):
    driver.find_element_by_id('addNewRecordButton').click()
    wait_until_element_is_visible(driver, '[class=modal-content]', 5)
    driver.find_element_by_id('firstName').send_keys('Andrii' + str(w_id))
    driver.find_element_by_id('lastName').send_keys('Moisieiev' + str(w_id))
    driver.find_element_by_id('userEmail').send_keys('moisieiev@gmail.com')
    driver.find_element_by_id('age').send_keys('11')
    driver.find_element_by_id('salary').send_keys('1111')
    driver.find_element_by_id('department').send_keys('QA')
    driver.find_element_by_id('submit').click()


def check_added_worker(driver, xpath_str):
    elem_for_check = driver.find_element_by_xpath(xpath_str)
    if not elem_for_check.find_elements_by_css_selector('.rt-td')[0].text == "Andrii0":
        return False
    elif not elem_for_check.find_elements_by_css_selector('.rt-td')[0].text == "Andrii0":
        return False
    elif not elem_for_check.find_elements_by_css_selector('.rt-td')[1].text == "Moisieiev0":
        return False
    elif not elem_for_check.find_elements_by_css_selector('.rt-td')[2].text == "11":
        return False
    elif not elem_for_check.find_elements_by_css_selector('.rt-td')[3].text == "moisieiev@gmail.com":
        return False
    elif not elem_for_check.find_elements_by_css_selector('.rt-td')[4].text == "1111":
        return False
    elif not elem_for_check.find_elements_by_css_selector('.rt-td')[5].text == "QA":
        return False
    return True


def del_record(driver, css_selector_str):
    elements = driver.find_elements_by_css_selector(css_selector_str)
    print("Elements:  ", elements)
    print("Elements len:  ", len(elements))
    if not elements:
        return 'Can\'t find elements'

    for i in range(len(elements)):
        elem = driver.find_element_by_css_selector(css_selector_str)
        elem.click()
        # time.sleep(2)
    del_record(driver, css_selector_str)


class TestBasicLevel(unittest.TestCase):
    def setUp(self) -> None:
        self.chrome_options = webdriver.ChromeOptions()
        self.chrome_options.add_argument('headless')
        # self.driver = webdriver.Chrome(options=self.chrome_options)
        self.driver = webdriver.Chrome()
        self.driver.implicitly_wait(1)
        self.driver.set_window_size(1920, 1080)

    def tearDown(self) -> None:
        self.driver.quit()

    def test_fill_all_fields(self):
        driver = self.driver
        driver.get('https://demoqa.com/automation-practice-form')
        form_elements = driver.find_elements_by_xpath('//form//input[not(contains(@class, "form-control-file")) ]')
        form_elements[0].send_keys('Andrii')  # name
        form_elements[1].send_keys('Moisieiev')  # lastname
        form_elements[2].send_keys('testmail@gmail.com')  # email
        driver.find_element_by_xpath('//*[@id="genterWrapper"]/div[2]/div[1]/label').click()  # gender male
        form_elements[6].send_keys('1234567890')  # phone
        form_elements[7].send_keys(Keys.CONTROL, 'a')  # date
        form_elements[7].send_keys('10/08/1993')  # date
        form_elements[7].send_keys(Keys.ENTER)  # date
        form_elements[8].send_keys('Maths')  # subject
        form_elements[8].send_keys(Keys.TAB)
        driver.find_element_by_xpath('//*[@id="hobbiesWrapper"]/div[2]/div[1]/label').click()  # hibbies
        driver.find_element_by_id('currentAddress').send_keys('Не скажу!')  # address
        driver.find_element_by_id('state').click()  # state expand list
        driver.find_element_by_xpath('//*[@id="react-select-3-input"]').send_keys('NCR', Keys.ENTER)
        driver.find_element_by_id('city').click()  # city
        driver.find_element_by_xpath('//*[@id="react-select-4-input"]').send_keys('Delhi', Keys.ENTER)
        driver.find_element_by_id('submit').click()
        self.assertTrue(driver.find_element_by_css_selector('.modal-open'))

    def test_advanced_form(self):
        driver = self.driver
        driver.get('https://demoqa.com/webtables')
        driver.find_element_by_xpath('//option[@value=5]').click()
        check_selected_option(driver.find_element_by_xpath('//select'))
        self.assertEqual('5 rows', check_selected_option(driver.find_element_by_xpath('//select')))
        for i in range(3):
            add_worker(driver, i)
        driver.find_element_by_xpath('//button[contains(., "Next")]').click()
        self.assertEqual(driver.find_element_by_css_selector('[aria-label="jump to page"]').get_attribute('value'), '2')
        driver.find_element_by_xpath('//button[contains(., "Previous")]').click()
        del_record(driver, "[id*='delete-record']")
        add_worker(driver)
        self.assertTrue(check_added_worker(driver, '//div[@class="rt-tr-group"][1]'))
        # driver.find_element_by_id('dsdsdsd')


if __name__ == '__main__':
    unittest.main()
